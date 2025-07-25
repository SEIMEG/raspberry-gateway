export const initiBluettoth: any = () => {
  console.log('inicializando bluetooth');
};

export const getDataBTAllDevices = async () => {
  return [
    { publisher: 'C0:49:EF:F0:EC:D0', value: 23.33, name: null },
    { publisher: 'F4:12:FA:43:09:5C', value: 32.22, name: null },
  ];
};
