import { useRouter } from 'next/router';
import Location from '../../router/location/location.component';

export default function LocationWithId() {
  const router = useRouter();
  const { id } = router.query;

  return <Location id={id} />;
}