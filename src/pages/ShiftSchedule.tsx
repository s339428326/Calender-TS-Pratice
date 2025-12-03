import { MainLayout } from '@/template/MainLayout';
import { Calendar } from '@/components/Calendar';
import { Button } from '@/components/ui/button';

const MemberInfo = ({ member }) => {
  return (
    <div className="flex">
      <div className="flex gap-4 items-center border p-2 rounded-md shadow-sm hover:bg-gray-50">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={member.avatar}
        />
        <ul className="flex flex-col">
          <li className="flex gap-1 items-center">
            <span className="bg-amber-200 rounded-md p-1">{member.shift}</span>
            <span>{member.name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const ShiftSchedule = () => {
  const memberDummy = [
    {
      shift: 'A7',
      name: 'Tom',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      shift: 'A8',
      name: 'Jenny',
      avatar:
        'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <MainLayout>
      <section className="mx-4 flex">
        <Button className="ml-auto">Excel 匯入</Button>
      </section>
      <section className="mx-4 my-4">
        <h2 className="font-bold text-2xl mb-2">維運值班人員</h2>
        <ul className="flex gap-4">
          {memberDummy.map((member, index) => (
            <li key={index}>
              <MemberInfo member={member} />
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-4 flex-1">
        <Calendar />
      </section>
    </MainLayout>
  );
};
