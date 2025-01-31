export const getContactsInfo = async () => {
  const mapUrl = "https://www.google.com/maps/place/%D0%94%D1%83%D0%BF%D0%BD%D0%B8%D1%86%D0%B0/@42.2631627,23.1011456,14z/data=!3m1!4b1!4m6!3m5!1s0x14aae824073f9ac1:0x400a01269bf51c0!8m2!3d42.2613275!4d23.1124424!16zL20vMDlzbnY1?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D";
  
  return {
    title: "Контакти",
    phoneNumber: "0899718824",
    emailAddress: "mail@tapicerexpress.com",
    address: "Дупница, ул. Благодарност 9А",
    mapUrl,
  }
}
