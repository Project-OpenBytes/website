import gasRequest from '~/src/services/request.gas';
import { Cache } from '~/src/utils/cache';

export default class UserService {
  public static fetchUser(token: string) {
    return gasRequest('/user/api/v4/token/user-client-detail', {
      method: 'get',
      headers: {
        'X-Token': token,
      },
    });
  }

  public static fetchWorkspaces(token = Cache.getToken()) {
    const tokenHeader: any = {};
    if (token || Cache.getToken()) {
      tokenHeader['X-Token'] = token || Cache.getToken();
    }
    return gasRequest('/authorization/v1/getOrganizations', {
      method: 'post',
      data: {},
      headers: {
        ...tokenHeader,
      },
    });
  }

  public static saveData(data) {
    return gasRequest('/event-tracking/api/questionnaire/json-form/save', {
      method: 'post',
      data: {
        ...data,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public static signOut(token: string) {
    return gasRequest('/user/api/v2/user/logout', {
      method: 'post',
      headers: {
        'X-Token': token,
      },
    });
  }
}
