export const HISTORY = [];

export function logLaunch(entry) {
  HISTORY.push({ time: Date.now(), entry });
}
