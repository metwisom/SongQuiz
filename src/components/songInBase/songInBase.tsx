import {useEffect, useState} from 'react';
import {Transport} from '@/lib/transport';

type ResponseCount = {
  count: number
}

export default function SongInBase() {
  const [countSong, updateCount] = useState<number | null>(null);
  useEffect(() => {
    Transport.get<ResponseCount>('/api/songs/count')
    .then(data => {
      updateCount(data.count);
    });
  });

  return <div>{countSong ?? 0}</div>;
}
