import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMonstersById } from '../../services/Monsters';

export default function useFetchMonster() {
  const { id } = useParams();
  const [monsters, setMonster] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const monData = await getMonstersById(id);
      setMonster(monData);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  return [loading, monsters];
}
