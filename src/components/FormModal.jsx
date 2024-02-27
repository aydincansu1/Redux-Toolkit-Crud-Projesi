import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    //formData clasindan ornek olustur
    const formData = new FormData(event.target);

    // formdaki inputlarin verisini objeye ceviriyoruz
    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      // guncelleneek eleman varsa guncellenecegini haber ver
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      // yoksa reducer'a veri eklenecegini haber ver
      dispatch(addTask(taskData));
    }

    //modali kapat
    handleClose();
  };
  return (
    <Modal centered className="text-dark" show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? "Görevi Düzenle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <FormGroup>
            <Form.Label>Görev Tanımla</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              name="title"
              placeholder="Navbarı Düzenle"
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>İsminiz</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              name="author"
              placeholder="örn: Ahmet"
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Oluşturan</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              name="assigned_to"
              placeholder="örn: Mehmet"
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              name="end_date"
              type="date"
              required
            />
          </FormGroup>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button type="submit" variant="primary">
              {editItem ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
