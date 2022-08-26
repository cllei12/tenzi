import React from 'react'

function Record() {
    const [records, setRecords] = React.useState([]);
    // const URL = "http://ec2-18-212-191-193.compute-1.amazonaws.com:8080/"
    const URL = "http://localhost:8080/"

    React.useEffect(() => {
        fetch(URL + 'api/record/getOrderByTime')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRecords(data);
            })
    }, []);

    console.log(records);

    return (
        <div class="overflow-x-auto relative m-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Time (second)
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Rolls (times)
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(record => {
                        return (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {record.recordTime}
                                </th>
                                <td class="py-4 px-6">
                                    {record.time} s
                                </td>
                                <td class="py-4 px-6">
                                    {record.rolls}
                                </td>
                                <td class="py-4 px-6">
                                    {record.name}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default Record