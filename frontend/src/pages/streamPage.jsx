import { useState, useEffect } from 'react';
import Table from '@/layouts/Table';
import FormModal from '@/layouts/FormModal';
import axios from 'axios';

export default function Streams() {
  const [streams, setStreams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editStream, setEditStream] = useState(null);

  const fetchStreams = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/streams/getStreams`
      );
      setStreams(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStreams();
  }, []);

  const handleEdit = (stream) => {
    setEditStream(stream);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/v1/streams/${id}`
      );
      fetchStreams();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Streams</h1>
          <button
            className="px-4 py-2 bg-emerald-600 text-white rounded"
            onClick={() => {
              setEditStream(null);
              setShowModal(true);
            }}
          >
            Add Stream
          </button>
        </div>

        <Table
          columns={['Name', 'Program', 'Student Intake', 'Number of Sections']}
          data={streams}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {showModal && (
          <FormModal
            model="stream"
            data={editStream}
            onClose={() => setShowModal(false)}
            refresh={fetchStreams}
          />
        )}
      </div>
    </div>
  );
}
