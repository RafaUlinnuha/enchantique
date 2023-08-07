import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Single = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-12 grid grid-cols-3 px-12 xl:px-0">
      <div className="col-span-2">
        <img src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" className="w-[95%]" />
        <div class="py-6">
          <div class="flex items-center">
            <img class="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
            <div class="ml-3">
              <h3 class="font-semibold text-gray-800">Maria Wanner</h3>
              <p class="text-sm font-medium text-gray-400">Posted 2 days ago</p>
            </div>
            <Link to={`/write?edit=2`}>
              <button type="button" class="p-1 ml-4 rounded-full border border-transparent font-semibold bg-green-600 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                <EditIcon fontSize="small"></EditIcon>
              </button>
            </Link>
            <button type="button" class="p-1 ml-3 rounded-full border border-transparent font-semibold bg-red-600 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
              <DeleteIcon fontSize="small"></DeleteIcon>
            </button>
          </div>
        </div>
        <h1 className="font-medium text-xl">Labore fugiat, corporis quis deserunt veniam laborum ut magnam quos perspiciatis minus nesciunt. </h1>
        <p className="mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis porro doloribus beatae amet aliquam suscipit, dolorum sequi ullam quisquam optio minima nisi culpa, explicabo tempore illum tenetur officiis maxime. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eligendi repellat ut corrupti ducimus, cumque dolorum repudiandae. Atque sunt laudantium deleniti sed laboriosam animi iure, est minus facilis doloribus nesciunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis corporis repellat deserunt debitis perferendis eveniet officia dolor, reprehenderit quo qui inventore distinctio aspernatur quisquam. Pariatur dolorem cumque ut inventore quaerat?</p>
      </div>
      <div>
        <h1 className="font-bold text-lg text-gray-700 pb-4">Other posts you may like</h1>
        <a class="flex flex-col group bg-white shadow-sm overflow-hidden hover:shadow-lg transition" href="#">
          <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
            <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" src="../src/assets/bg-auth.png" alt="Image Description"/>
          </div>
            <div class="p-4 md:p-5">
              <h3 class="font-medium text-gray-800">
                Card title
              </h3>
              <p class="mt-1 text-gray-600 text-sm">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </a>
      </div>
    </div>
  )
}

export default Single