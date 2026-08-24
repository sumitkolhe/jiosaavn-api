/**
 * Worker environment bindings (`[vars]` in wrangler.toml).
 *
 * These are absent when the same code runs under Bun or Docker, so every read
 * must tolerate an undefined env.
 */
export interface AppBindings {
  /**
   * Set to the string "false" to disable the home-feed query aliases and send
   * every query through normal search. Editable from the Cloudflare dashboard,
   * so it takes effect without a redeploy.
   */
  FEED_ALIASES_ENABLED?: string
}
