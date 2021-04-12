import { phone, fileSizeValidation, fileExt } from '@/helpers/validators'

describe('validators helper', () => {
  it('should correct validate phone if incorrect phone', () => {
    expect(phone('fewfew')).toBeFalsy()
  })

  it('should correct validate phone if correct phone', () => {
    expect(phone('+123')).toBeTruthy()
  })

  it('should correct validate phone if phone empty', () => {
    expect(phone('')).toBeTruthy()
  })

  it('should correct validate file if file empty', () => {
    expect(fileSizeValidation()).toBeTruthy()
  })

  it('should correct validate file size property less then 5000000', () => {
    expect(fileSizeValidation({
      size: 10,
    })).toBeTruthy()
  })

  it('should correct validate file size property more then 5000000', () => {
    expect(fileSizeValidation({
      size: 5000001,
    })).toBeFalsy()
  })

  it('should correct validate file extension if not value', () => {
    expect(fileExt()).toBeTruthy()
  })

  it('should correct validate file if extension permissible', () => {
    expect(fileExt({
      name: 'file.pdf',
    })).toBeTruthy()
  })

  it('should correct validate file if extension not permissible', () => {
    expect(fileExt({
      name: 'file.txt',
    })).toBeFalsy()
  })
})
