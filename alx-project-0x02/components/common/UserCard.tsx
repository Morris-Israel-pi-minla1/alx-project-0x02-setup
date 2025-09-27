import { UserProps } from '../../interfaces'

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Email:</span> {email}
      </p>
      <div className="text-gray-600">
        <p className="font-medium mb-1">Address:</p>
        <p>{address.street}, {address.city}</p>
        <p>ZIP: {address.zipcode}</p>
      </div>
    </div>
  )
}