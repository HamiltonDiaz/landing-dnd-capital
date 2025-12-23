export const onRequest = async ({ env }: { env: any }) => {
  return new Response(
    JSON.stringify({
      airbnb: env.AIRBNB_URL ?? '',
      bookingcom: env.BOOKINGCOM_URL ?? '',
      contactEmail: env.CONTACT_EMAIL ?? '',
      facebook: env.FACEBOOK_URL ?? '',
      instagram: env.INSTAGRAM_URL ?? '',
      phoneNumber: env.PHONE_NUMBER ?? '',
      tripadvisor: env.TRIPADVISOR_URL ?? '',
      twitter: env.TWITTER_URL ?? '',
      web3formsKey: env.WEB3_FORMS_KEY ?? ''
    }),
    {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    }
  );
};
