import ClassSettings from "../../models/admin/classSettings.model.js";

export const createClassSettings = async (req, res) => {
  try {
    const info = new ClassSettings(req.body);
    await info.save();
    res.status(201).json(info);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getClassSettings = async (req, res) => {
  try {
    const infos = await ClassSettings.find();
    res.json(infos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClassSettingsById = async (req, res) => {
  try {
    const info = await ClassSettings.findById(req.params.id);
    if (!info) return res.status(404).json({ message: "Not found" });
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateClassSettings = async (req, res) => {
  try {
    const info = await Stream.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!info) return res.status(404).json({ message: "Not found" });
    res.json(info);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteClassSettings = async (req, res) => {
  try {
    const info = await Stream.findByIdAndDelete(req.params.id);
    if (!info) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
