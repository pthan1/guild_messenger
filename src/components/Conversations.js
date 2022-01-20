
const Conversations = ({userConversations, currentUser, users}) => {

  const partners = () => {
    const partnerIds = userConversations.map(conversation => {
      const ids = conversation.user_ids.filter(element => element !== currentUser);
      return ids;
    })
    console.log('partnerIds', partnerIds)

    let convoPartners = partnerIds.map(id => 
      users.find(user => {
        return user.id == id;
        }
      )
    )
    convoPartners = convoPartners.map(partner => <button>{partner.name}</button>)

    return convoPartners;
  }
    
    

  return (
    <div className="partners">
      Conversations <br />
      {partners()}
    </div>
  )
}

export default Conversations;