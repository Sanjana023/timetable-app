import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
// const url=import.meta.env.BASE_URL
export default function FormModal({ model, data, onClose, refresh }) {
  const [formData, setFormData] = useState({
    name: '',
    university: '',
  });
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);

  // Populate form data if editing
  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || '',
        university: data.university?._id || '',
      });
    } else {
      setFormData({ name: '', university: '' });
    }
  }, [data]);

  // Fetch universities safely
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/university/getUni`);
       
        console.log(res);
        
       setUniversities(res.data||[])
      } catch (err) {
        console.error('Failed to fetch universities:', err);
        setUniversities([]);
      }
    };
    fetchUniversities();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (data?._id) {
        // Edit existing
        console.log(data._id);
        
        await axios.put(`${import.meta.env.VITE_BASE_URL}/api/v1/programs/${data._id}`, formData);
        
        
      } else {
        // Add new
        await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/programs/createProgram`, formData);
      }
      refresh(); // refresh table
      onClose(); // close modal
    } catch (err) {
      console.error('Failed to submit form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <h2 className="text-xl font-bold mb-4">
          {data ? 'Edit Program' : 'Add Program'}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Program Name"
            className="w-full p-2 border rounded"
            required
          />

          {/* University Dropdown */}
          <select
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select University</option>
            {Array.isArray(universities) && universities.length > 0 ? (
              universities.map((u) => (
                <option key={u._id} value={u._id}>
                  {u.name}
                </option>
              ))
            ) : (
              <option disabled>No universities available</option>
            )}
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
