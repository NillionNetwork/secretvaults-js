import pino, { type Logger } from "pino";

export function createTestLogger(): Logger {
  return pino({
    transport: {
      target: "pino-pretty",
      options: {
        sync: true,
        singleLine: true,
        messageFormat: "fixture - {msg}",
      },
    },
  });
}
