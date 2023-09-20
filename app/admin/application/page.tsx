import { fetchFusionAuth, httpMethods } from '@/lib/fusionauth';

export default async function Application() {
  const data = await fetchFusionAuth({
    path: '/api/application',
    method: httpMethods.GET,
  });

  return <div>{JSON.stringify(data)}</div>;
}
