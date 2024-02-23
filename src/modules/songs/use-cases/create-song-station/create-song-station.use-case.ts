import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import type { IUseCase } from '../../../../common/types'

export class CreateSongStationUseCase implements IUseCase<String, String> {
  constructor() {}

  async execute(songId: string) {
    const encodedSongId = JSON.stringify([encodeURIComponent(songId)])

    const response = await useFetch<{ stationid: string }>(Endpoints.station, {
      entity_id: encodedSongId,
      entity_type: 'queue'
    })

    if (!response || !response.stationid) throw new HTTPException(500, { message: 'could not create station' })

    return response.stationid
  }
}
