import * as Cookies from 'js-cookie';

export const GRAVITI_TOKEN: string = 'X-Token';
export const GRAVITI_COOKIE_WARNING: string = 'GRAVITI_COOKIE_WARNING';
export const GRAVITI_CHANNEL: string = 'Graviti_Channel';
export const GRAVITI_UTM_CAMPAIGN: string = 'Graviti_utm_campaign';
export const GRAVITI_UTM_SOURCE: string = 'Graviti_utm_source';

export class Cache {
  public static setToken(t: string) {
    Cookies.set(GRAVITI_TOKEN, t, {
      expires: 30,
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
      path: '/',
    });
    if (process.env.NEXT_PUBLIC_HOST && process.env.NEXT_PUBLIC_HOST.includes('localhost')) {
      Cookies.set(GRAVITI_TOKEN, t, { expires: 30 });
    }
  }

  public static getToken(): string | undefined {
    return Cookies.get(GRAVITI_TOKEN);
  }

  public static removeToken() {
    Cookies.remove(GRAVITI_TOKEN, { domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN });
    Cookies.remove(GRAVITI_TOKEN, { domain: 'localhost' });
    Cookies.remove(GRAVITI_TOKEN);
  }

  public static setCookieWarning(): void {
    Cookies.set(GRAVITI_COOKIE_WARNING, 'Thank you for using Graviti AI Services', {
      expires: 365,
    });
    Cookies.set(GRAVITI_COOKIE_WARNING, 'Thank you for using Graviti AI Services', {
      expires: 365,
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
      path: '/',
    });
  }

  public static getCookieWarning(): string | undefined {
    return Cookies.get(GRAVITI_COOKIE_WARNING);
  }

  public static setChannel(channel: string): void {
    Cookies.set(GRAVITI_CHANNEL, channel, { domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN });
  }

  public static setUtmCampaign(channel: string): void {
    Cookies.set(GRAVITI_UTM_CAMPAIGN, channel, { domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN });
  }

  public static setUtmSource(channel: string): void {
    Cookies.set(GRAVITI_UTM_SOURCE, channel, { domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN });
  }

  public static getChannel(): string | undefined {
    return Cookies.get(GRAVITI_CHANNEL);
  }
}
