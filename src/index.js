module.exports.onRpcRequest = async ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `Hello, ${origin}!`,
            description:
              'This custom confirmation is just for display purposes.',
            textAreaContent:
              'But you can edit the snap source code to make it do something, if you want to!',
          },
        ],
      });
    case 'web3-mq':
      return new Promise((resolve, reject) => {
        resolve({
          web3Lib: 'test',
        });
      });
    default:
      throw new Error('Method not found.');
  }
};
