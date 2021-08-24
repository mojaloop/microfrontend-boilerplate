import { State } from 'store/types';
import editorMock from 'App/Editor/_mockData';
import { Account } from 'App/Editor/types';
import buildApi, { buildEndpointBuilder } from '@modusbox/redux-utils/lib/api';

const services = {
  test: {
    baseUrl: '',
    mock: () => true,
  },
};

const builder = buildEndpointBuilder<State>();

export default buildApi({
  account: builder<{}, Account>({
    service: services.test,
    url: () => 'test.com',
    mock: editorMock,
  }),
});
