class Seed
  def self.start
    seed = Seed.new
    seed.create_users
  end

  def create_users
    User.create({
      first_name: "Daniel",
      last_name: "Shin",
      bio: "alskd jlskadfj  lksajd salkdjf lskdjsdk lja lksdajf ksajdf k;jsa sakdjsadf kldfsjgfds sajdf ksdj sadjfsd jsadfk sdkjdsajfdsj sdk skfsdfjsdksd jsd asdjfsdlfjksldfsdafjdskj j sdskadfjsdkfjskdjfaslk sadkfsafsjdfsd jlksaf",
      title: "Software Developer",
      })

    User.create({
      first_name: "Anthony",
      last_name: "Ciccone",
      bio: "alskd jlskadfj  lksajd salkdjf lskdjsdk lja lksdajf ksajdf k;jsa sakdjsadf kldfsjgfds sajdf ksdj sadjfsd jsadfk sdkjdsajfdsj sdk skfsdfjsdksd jsd asdjfsdlfjksldfsdafjdskj j sdskadfjsdkfjskdjfaslk sadkfsafsjdfsd jlksaf",
      title: "Software Developer",
      })

    User.create({
      first_name: "Matt",
      last_name: "DeMarteau",
      bio: "alskd jlskadfj  lksajd salkdjf lskdjsdk lja lksdajf ksajdf k;jsa sakdjsadf kldfsjgfds sajdf ksdj sadjfsd jsadfk sdkjdsajfdsj sdk skfsdfjsdksd jsd asdjfsdlfjksldfsdafjdskj j sdskadfjsdkfjskdjfaslk sadkfsafsjdfsd jlksaf",
      title: "Software Developer",
      })
  end

  Seed.start
end
