import { postData } from './http';

describe('Http', () => {
  beforeEach(() => {
    Object.defineProperty(document, 'cookie', {
      value: 'csrftoken=test',
      configurable: true
    });
    fetch.resetMocks();
  });

  it('should post successfully even though no data or headers', async () => {
    fetch.mockResponse('');

    const url = '/api/test';

    const response = await postData(url);

    expect(response).toBeDefined();
    expect(response.message).not.toBeDefined();
    expect(fetch.mock.calls.length).not.toEqual(0);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][1].headers).toEqual({ 'X-CSRFToken': 'test' });
    expect(fetch.mock.calls[0][1].body).toEqual('');
  });

  it('should post successfully with no data set, but with custom headers', async () => {
    fetch.mockResponse('');

    const url = '/api/test';

    const response = await postData(url);

    expect(response).toBeDefined();
    expect(response.message).not.toBeDefined();
    expect(fetch.mock.calls.length).not.toEqual(0);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][1].headers).toEqual({ 'X-CSRFToken': 'test' });
    expect(fetch.mock.calls[0][1].body).toEqual('');
  });

  it('should post data successfully with data but no custom headers', async () => {
    const data = { key: 'value' };
    fetch.mockResponse(JSON.stringify(data));

    const url = '/api/test';

    const response = await postData(url, data);

    expect(response).toBeDefined();
    expect(response.message).not.toBeDefined();
    expect(fetch.mock.calls.length).not.toEqual(0);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][1].headers).toEqual({
      'X-CSRFToken': 'test'
    });
    expect(fetch.mock.calls[0][1].body).toEqual(data);
  });

  it('should post data successfully with data and custom headers', async () => {
    const data = { key: 'value' };
    fetch.mockResponse(JSON.stringify(data));

    const url = '/api/test';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    const response = await postData(url, data, headers);

    expect(response).toBeDefined();
    expect(response.message).not.toBeDefined();
    expect(fetch.mock.calls.length).not.toEqual(0);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][1].headers).toEqual({
      'X-CSRFToken': 'test',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    expect(fetch.mock.calls[0][1].body).toEqual(data);
  });

  it('should post data unsuccessfully', async () => {
    fetch.mockReject({ message: 'Error posting data' });

    const url = '/api/test';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    const data = JSON.stringify({ key: 'value' });

    const response = await postData(url, data, headers);

    expect(response).toBeDefined();
    expect(response.message).toEqual('Error posting data');
    expect(fetch.mock.calls.length).not.toEqual(0);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][1].headers).toEqual({
      'X-CSRFToken': 'test',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    expect(fetch.mock.calls[0][1].body).toEqual(data);
  });

  it('should catch error if cookie not set or due to missing cookie value', async () => {
    Object.defineProperty(document, 'cookie', { value: 'csrftoken=' });

    const url = '/api/test';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    const data = JSON.stringify({ key: 'value' });

    try {
      await postData(url, data, headers);
    } catch (error) {
      expect(error.message).toEqual('csrfCookie is not set or has no value');
    }
  });
});
