import { client } from '@/lib/fusionauth';

export default async function Application({
  params,
}: {
  params: { id: string };
}) {
  const data = await client.retrieveApplication(params.id);

  return (
    <>
      <div>Application-{data.response.application?.name}</div>
      <div>{JSON.stringify(data.response.application)}</div>
    </>
  );
}
