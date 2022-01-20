
const Conversations = ({userConversations, currentUser, users, setActiveConversation}) => {

  const partners = () => {
    const partnerIds = userConversations.map((conversation, index) => {
      const ids = conversation.user_ids.filter(element => element !== currentUser);
      return {index, ids};
    })

    let convoPartners = partnerIds.map(id => {
      const partner = users.find(user => {
        return user.id === id.ids[0];
        }
      )
      return {partner: partner, index: id.index}
      })

    convoPartners = convoPartners.map(partner => <button onClick={(e) => {e.preventDefault();
    handleClick(partner.index)}}>{partner.partner.name}</button>)

    return convoPartners;
  }
    const handleClick = (index) => {
      setActiveConversation(userConversations[index])
    }


  return (
    <div className="partners">
      Conversations <br />
      {partners()}
    </div>
  )
}

export default Conversations;