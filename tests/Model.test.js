import Model from '../src/Model';

describe('Model', () => {
  describe('EvtType', () => {
    it('Changed', () => {
      expect(Model.EvtType.Changed).toEqual('Changed');
    });
  });
});
