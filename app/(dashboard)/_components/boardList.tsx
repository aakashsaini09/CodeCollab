"use client";
import React from 'react'
interface BoardListProps {
    orgId: string,
    query: {
        search?: string,
        favorites?: string
    }
}

const BoardList = ({orgId, query }: BoardListProps) => {
    const data = [];
    if(!data?.length && query.search){
        return(
            <div>
                Try searching for a board
            </div>
        )
    }
    if(!data?.length && query.favorites){
        return (
            <div>
                You don't have any favorite
            </div>
        )
    }
    if(!data?.length ){
        return (
            <div>
                No boards found
            </div>
        )
    }
  return (
    <div>
    </div>
  )
}

export default BoardList
