import React from "react";
import data from "../data/metricData.json";

const MainPage = () => {
  return (
    <div>
      <div class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10 overflow-x-hidden">
        <h1 class="text-lg text-gray-400 font-medium">Expression Editor</h1>
        <div class="flex flex-col mt-6">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden sm:rounded-lg">
                <table class=" min-w-full text-sm text-gray-400 overflow-x-hidden">
                  <thead class="bg-gray-800 text-xs uppercase font-medium">
                    <tr>
                      <th></th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        Metric Name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center tracking-wider"
                      >
                        Expressions
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        Update/Modify
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-gray-800">
                    {data.metricData.map((el) => {
                      return (
                        <tr class="bg-black bg-opacity-20">
                          <td class="pl-4">{el.id}</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">
                              {el.metricName}
                            </span>
                          </td>
                          <td class="px-6 py-4 whitespace max-w-fit">{el.expression}</td>
                          <td>
                            <button>Modify</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
