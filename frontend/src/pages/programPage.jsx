import { useState, useEffect } from 'react';
import Table from '@/layouts/Table';
import FormModal from '@/layouts/FormModal';
import axios from 'axios';

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProgram, setEditProgram] = useState(null);

  const fetchPrograms = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/programs/getProgram`);
    setPrograms(res.data);
    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const handleEdit = (program) => {
    setEditProgram(program);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/programs/${id}`);
    fetchPrograms();
  };

  return (
    <div className="flex">
      
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Programs</h1>
          <button
            className="px-4 py-2 bg-emerald-600 text-white rounded"
            onClick={() => setShowModal(true)}
          >
            Add Program
          </button>
        </div>
        <Table
          columns={['Name', 'University']}
          data={programs}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        {showModal && (
          <FormModal
            model="program"
            data={editProgram}
            onClose={() => setShowModal(false)}
            refresh={fetchPrograms}
          />
        )}
      </div>
    </div>
  );
}
