// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone Number Tests
test('valid phone number 1', () => 
{
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number 2', () => 
{
  expect(isPhoneNumber('987-654-3210')).toBe(true);
});

test('invalid phone number 1', () => 
{
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number 2', () => 
{
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// Email Tests
test('valid email 1', () => 
{
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('hello@gmail.com')).toBe(true);
});

test('invalid email 1', () =>
 {
  expect(isEmail('notanemail')).toBe(false);
});

test('invalid email 2', () => 
{
  expect(isEmail('missing@dot')).toBe(false);
});

// Strong Password Tests
test('valid strong password 1', () => 
{
  expect(isStrongPassword('Password123!')).toBe(true);
});

test('valid strong password 2', () => 
{
  expect(isStrongPassword('StrongPass1@')).toBe(true);
});

test('invalid strong password 1', () => 
{
  expect(isStrongPassword('weak')).toBe(false);
});

test('invalid strong password 2', () => {
  expect(isStrongPassword('12345678')).toBe(false);
});

// Date Tests
test('valid date 1', () => 
{
  expect(isDate('12/25/2025')).toBe(true);
});

test('valid date 2', () => 
{
  expect(isDate('01/01/2024')).toBe(true);
});

test('invalid date 1', () => {
  expect(isDate('25/12/2025')).toBe(false);
});

test('invalid date 2', () => 
{
  expect(isDate('not-a-date')).toBe(false);
});

// Hex Color Tests
test('valid hex color 1', () => 
{
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('valid hex color 2', () => 
{
  expect(isHexColor('#000000')).toBe(true);
});

test('invalid hex color 1', () => {
  expect(isHexColor('FFFFFF')).toBe(false);
});

test('invalid hex color 2', () =>
 {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});