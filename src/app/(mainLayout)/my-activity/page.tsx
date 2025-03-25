import PageHeader from '@/components/common/PageHeader'
import { validateSession } from '@/lib/auth/validateSession';
import React from 'react'

const MyActivity = async () => {
  const {message : user} = await validateSession();
  return (
    <div>
      <PageHeader header='Activity' userTz={user?.timezone || 'America/Chicago'}/>
    </div>
  );
}

export default MyActivity