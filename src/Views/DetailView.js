import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MonsterDetails from '../Components/MonsterDetails/MonsterDetails';
import { getMonstersById } from '../services/Monsters';

export default function DetailView() {
  const { id } = useParams();
  const [monsters, setMonster] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const monData = await getMonstersById(id);
      console.log(monData);
      setMonster(monData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push('/');
  };

  if (loading) return <p>Loading..</p>;

  return (
    <div className="deets">
      <div>
        <MonsterDetails {...{ monsters }} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
