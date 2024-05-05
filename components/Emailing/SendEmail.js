import qs from 'qs';
import {Linking} from 'react-native';

export async function SendEmail(from, subject, body, options = {}) {
  const {cc, bcc} = options;
  const to = 'joshbag2012@gmail.com';
  
  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
    subject: subject + from,
    body: body,
    cc: cc,
    bcc: bcc,
  });

  if (query.length) {
    url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
}
