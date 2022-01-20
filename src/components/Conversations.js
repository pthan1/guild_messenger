
const Conversations = ({userConversations, currentUser, users}) => {

  const partners = () => {
    const partnerIds = userConversations.map((conversation, index) => {
      const ids = conversation.user_ids.filter(element => element !== currentUser);
      return {index, ids};
    })
    console.log('partnerIds', partnerIds)

    let convoPartners = partnerIds.map(id => {
      const partner = users.find(user => {
        return user.id === id.ids[0];
        }
      )
      return {partner: partner, id: id.index}
      })

    console.log(convoPartners)
    convoPartners = convoPartners.map(partner => <button onClick={handleClick}>{partner.partner.name}</button>)

    return convoPartners;
  }
    const handleClick = () => {
console.log('click')
    }


  return (
    <div className="partners">
      Conversations <br />
      {partners()}
    </div>
  )
}

export default Conversations;