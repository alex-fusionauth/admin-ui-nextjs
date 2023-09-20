import { Application, columns } from './columns';
import { DataTable } from './data-table';
import { client } from '@/lib/fusionauth';

export default async function Applications() {
  const data = await client.retrieveApplications();
  if (data.statusCode !== 200 || data.response?.applications === undefined) {
    return <div>No Applications Found or No Access.</div>;
  }
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={data.response.applications as Application[]}
      />
    </div>
  );
}
