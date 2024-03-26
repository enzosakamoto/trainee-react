import { useState } from 'react'
import '../styles/Card.css'

interface CardProps {
  name: string
  role: string
}

export default function Card({ name, role }: CardProps) {
  const [isDark, setDark] = useState<boolean>(false)
  return (
    <div
      className={isDark ? 'container-black' : 'container'}
      onClick={() => setDark(!isDark)}
    >
      <div className="square"></div>
      <div className="info">
        <p className="name">{name}</p>
        <p className="role">{role}</p>
      </div>
    </div>
  )
}
