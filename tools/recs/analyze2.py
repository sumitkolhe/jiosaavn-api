import os,sys,json,glob,numpy as np,warnings; warnings.filterwarnings('ignore')
os.environ['TF_CPP_MIN_LOG_LEVEL']='3'
import essentia; essentia.log.infoActive=False; essentia.log.warningActive=False
import essentia.standard as es
M='models/'
emb=es.TensorflowPredictEffnetDiscogs(graphFilename=M+'discogs-effnet-bs64-1.pb',output='PartitionedCall:1')
heads={}
for n in ['voice_instrumental','danceability','mood_happy','mood_sad','mood_aggressive','mood_relaxed','mood_party','tonal_atonal','mood_acoustic','mood_electronic']:
    heads[n]=es.TensorflowPredict2D(graphFilename=M+f'{n}-discogs-effnet-1.pb',output='model/Softmax')
mn=es.TensorflowPredictMusiCNN(graphFilename=M+'msd-musicnn-1.pb',output='model/dense/BiasAdd')
av=es.TensorflowPredict2D(graphFilename=M+'deam-msd-musicnn-2.pb',output='model/Identity')
rh=es.RhythmExtractor2013(method='degara')
def feat(path):
    a=es.MonoLoader(filename=path,sampleRate=16000,resampleQuality=4)()
    e=emb(a); out={'emb':e.mean(0).astype(np.float32)}
    vr=av(mn(a)).mean(0); out['valence']=float(vr[0]); out['arousal']=float(vr[1])
    try: out['bpm']=float(rh(a)[0])
    except Exception: out['bpm']=0.0
    for n,h in heads.items(): out[n]=h(e).mean(0)
    return out
if __name__=='__main__':
    shard,total=int(sys.argv[1]),int(sys.argv[2]); ck=f'data/feat2_{shard}.npy'
    res=np.load(ck,allow_pickle=True).item() if os.path.exists(ck) else {}
    files=[f for i,f in enumerate(sorted(glob.glob('data/clips/*.mp3'))) if i%total==shard]
    for n,f in enumerate(files):
        k=os.path.basename(f)[:-4]
        if k in res: continue
        try: res[k]=feat(f)
        except Exception as ex: print('fail',f,ex,flush=True)
        if n%200==0: np.save(ck,res,allow_pickle=True); print('progress',shard,len(res),flush=True)
    np.save(ck,res,allow_pickle=True); print('shard',shard,'DONE',len(res),flush=True)
