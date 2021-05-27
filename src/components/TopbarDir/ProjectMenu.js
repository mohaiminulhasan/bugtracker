import { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Dialog } from '@headlessui/react';

import { Dropdown } from '../Dropdown';

export const ProjectMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const history = useHistory();
  const { projectSlug } = useParams();
  const appContext = useContext(AppContext);

  const confirmDelete = e => {
    async function postData() {
      const uri = `${appContext.apiUrl}/projects/${projectSlug}/delete/`;

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'DELETE',
        headers: h,
        mode: 'cors'
      });

      await fetch(req);
    }

    postData();

    history.push('/home');
  }

  const handleDelete = () => {
    setIsDeleteOpen(true);
  }

  const handleEdit = () => {
    setIsOpen(true);
  }
  
  const menuItems = [
    [
      {
        'title': 'Edit project details',
        'onClick': handleEdit
      }
    ], 
    [
      {
        'title': 'Delete project',
        'textfg': 'red',
        'onClick': handleDelete
      }
    ], 
  ];

  return (
    <>
    <Dropdown icon={Icon} menubg='white' menufg='gray-500' rounded='lg' hover={true} menuItems={menuItems} alignMenu='left' />

    <Dialog open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="bg-white rounded max-w-sm mx-auto z-20 p-6">
          <Dialog.Title>Delete Project</Dialog.Title>
          <Dialog.Description>
            Do you really want to delete the project?
          </Dialog.Description>

          <div className='mb-2'>
            All the tickets and comments associated with the project will be gone.
          </div>

          <button onClick={confirmDelete} className='rounded py-1 px-2 border border-red-500 bg-red-500 text-white mr-2'>Delete</button>
          <button onClick={() => setIsOpen(false)} className='rounded py-1 px-2 border border-gray-500 bg-white text-gray-500'>Cancel</button>
        </div>
      </div>
    </Dialog>

    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="bg-white rounded max-w-sm mx-auto z-20 p-6">
          <Dialog.Title>Edit Project</Dialog.Title>
          <Dialog.Description>
            This is a demo modal that will contain a form to update the project details.
          </Dialog.Description>

          <div className='mb-2'>
            {/* Form goes here... */}
          </div>

          <button onClick={() => setIsOpen(false)} className='rounded py-1 px-2 border border-indigo-500 bg-indigo-500 text-white mr-2'>Save</button>
          <button onClick={() => setIsOpen(false)} className='rounded py-1 px-2 border border-gray-500 bg-white text-gray-500'>Cancel</button>
        </div>
      </div>
    </Dialog>
    </>
  );
}

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}