export interface IClient {
  _id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phoneNumber1: string;
  phoneNumber2: string;
  initialContactDate: string;
  initialContactNotes: string;
}

// from client.ts in backend:
    // firstName: {
    // lastName: {
    // middleName: {
    // nickName: {
    // phoneNumber1: {
    // phoneNumber2: {
    // address1: {
    // address2: {
    // city: {
    // state: {
    // zip: {
    // initialContactDate: {
    // initialContactNotes: {
    // spouseName: {
    // birthDate: {
    // additionalNotes: {
