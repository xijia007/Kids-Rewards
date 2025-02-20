import React, { createContext, useContext, useState } from 'react'

const mockKids = [
  {
    id: 1,
    name: 'Emma',
    age: 8,
    points: 150,
    image: null,
    history: [
      { date: '2024-02-15', action: 'Completed homework', points: 50 },
      { date: '2024-02-14', action: 'Cleaned room', points: 100 },
    ],
  },
  {
    id: 2,
    name: 'Lucas',
    age: 6,
    points: 200,
    image: null,
    history: [
      { date: '2024-02-15', action: 'Helped with dishes', points: 75 },
      { date: '2024-02-13', action: 'Made bed', points: 125 },
    ],
  },
]

const KidsContext = createContext()

export function KidsProvider({ children }) {
  const [kids, setKids] = useState(mockKids)

  const addKid = newKid => {
    setKids(prevKids => [
      ...prevKids,
      {
        ...newKid,
        id: Date.now(),
        points: Number(newKid.points) || 0,
        age: parseInt(newKid.age, 10),
        history: [],
      },
    ])
  }

  const updateKid = updatedKid => {
    setKids(prevKids =>
      prevKids.map(kid => (kid.id === updatedKid.id ? updatedKid : kid))
    )
  }

  const deleteKid = kidId => {
    setKids(prevKids => prevKids.filter(kid => kid.id !== kidId))
  }

  return (
    <KidsContext.Provider value={{ kids, addKid, updateKid, deleteKid }}>
      {children}
    </KidsContext.Provider>
  )
}

export function useKids() {
  const context = useContext(KidsContext)
  if (!context) {
    throw new Error('useKids must be used within a KidsProvider')
  }
  return context
}
