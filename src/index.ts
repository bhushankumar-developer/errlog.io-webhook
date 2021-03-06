import {Reporter} from './Reporter';
import {IReporterOptions} from './ReporterOptions';

export function ErrLogIo(apiKey: string) {
  const options: IReporterOptions = {
    errLogIoOptions: {
      apikey: apiKey,
    },
  };

  return new Reporter(options);
}
