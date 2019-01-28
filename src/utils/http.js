const cookiesToArray = () => {
  // Map cookies to an array of object key/value pairs.
  const cookiesArray = document.cookie.split(' ');
  let cookies = cookiesArray.map(cookieString => {
    const cookie = cookieString.split('=');

    return { name: cookie[0], value: cookie[1] };
  });

  return cookies;
};

export const postData = (url, data, headers = {}) => {
  // const csrfCookie = cookiesToArray().find(
  //   cookie => cookie.name === 'csrftoken'
  // );

  // if (csrfCookie && csrfCookie.value) {
  //   // Merge headers, appending commonly needed ones.
  //   const heads = headers
  //     ? { ...headers, 'X-CSRFToken': csrfCookie.value }
  //     : { 'X-CSRFToken': csrfCookie.value };

  // If there is data to post, then use it, otherwise ensure
  // body is an empty string.
  const submission = data ? data : '';

  return fetch(url, {
    credentials: 'include',
    method: 'POST',
    headers: headers,
    body: submission
  })
    .then(response => response)
    .catch(error => error);
  // } else {
  //   throw Error('csrfCookie is not set or has no value');
  // }
};
