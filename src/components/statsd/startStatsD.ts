import {StatsD} from 'hot-shots';
import * as Logger from 'bunyan';

export const startStatsD = (logger: Logger, host: string, port: number, prefix: string): StatsD => {
  const client = new StatsD({
    host:   host,
    port:   port,
    prefix: prefix,
  }) as StatsD;

  client.socket.on('error', (error) => {
    logger.error({
      error: error,
    }, 'StatsD Error in socket');
  });

  return client;
};