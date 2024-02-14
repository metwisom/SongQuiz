import {ReactElement} from 'react';

export default function Index() {
  // await prisma.artist.create({data:{
  //
  //   }})
  // const count = prisma.artist.count()
  const count = 0;
  return <span>testpage</span>;
}

Index.getLayout = (page: ReactElement) => {
  return <div>
    ownLayout
    <div>
      {page}
    </div>
  </div>;
};
