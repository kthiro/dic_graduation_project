30.times do |n|
  name = "user#{n + 11}"
  email = "#{name}@mail.com"
  password = "useruser"
  password_confirmation = "useruser"
  profile_image = File.open("./app/assets/images/users/user_profile_img_#{n + 1}.jpg")
  sport_event = "#{%w( バスケットボール アイススケート ゴルフ サーフィン スケートボート パラグライダー バレーボール ジョギング フライボード 
                   アイスホッケー 筋力トレーニング ソフトボール ムエタイ スキー アメリカンフットボール パラグライダー 馬術 レーシングカート 
                   サッカー 飛び込み 馬術 野球 スノーボード ボクシング 空手 テニス ロードバイク 野球 サッカー ランニング )[n]}"
  sport_event_career = n % 6
  area = "#{%w( 札幌市 青森市 盛岡市 秋田市 仙台市 山形市 福島市 宇都宮市 水戸市 前橋市 さいたま市 千葉市 新宿区 横浜市 静岡市 甲府市 松本市 新潟市 富山市 
            金沢市 福井市 京都市 大津市 岐阜市 名古屋市 津市 奈良市 和歌山市 大阪市 神戸市 )[n]}"
  sex = n % 2
  introduction = "#{name}です。よろしくお願いします！"
  
  User.create!(name: name, email: email, password: password, password_confirmation: password_confirmation, profile_image: profile_image, 
              sport_event: sport_event, sport_event_career: sport_event_career, area: area, sex: sex, introduction: introduction)
  
end

30.times do |n|
  name = "team#{n + 11}"
  sport_event = "#{%w(水球 テニス ゴルフ サッカー 野球 シーカヤック バスケットボール ジェットスキー ラフティング サッカー 野球観戦 ヨガ 陸上 パラグライダー 
                      アメリカンフットボール ラグビー 競馬 ボーリング カーリング ダーツ ボブスレー サーフィン 卓球 相撲 バドミントン ビーチバレー ランニング 
                      釣り トレッキング 水泳 )[n]}"
  area = "#{%w( 岡山市 鳥取市 松江市 広島市 山口市 高松市 松山市 徳島市 高知市 福岡市 長崎市 佐賀市 熊本市 大分市 宮崎市 鹿児島市 那覇市 渋谷区 八王子市 川崎市  
            文京区 港区 杉並区 江東区 立川市 品川区 足立区 杉並区 世田谷区 台東区)[n]}"
  number_of_member = (n + 2) * 111 % 11 * n
  profile_image = File.open("./app/assets/images/teams/team_profile_img_#{n + 1}.jpg")
  introduction = "#{name}です。毎週#{%w(日 月 火 水 木 金 土)[n % 7]}曜日に、#{area}#{%w(体育館 公園 競技場 スタジアム アリーナ)[n % 5]}で活動しています。 "
  
  Team.create!(name: name, sport_event: sport_event, area: area, number_of_member: number_of_member,
              profile_image: profile_image, introduction: introduction)
  
end

30.times do |n|
  user = User.find_by(name: user11)
  team = Team.find_by(name: team11)
  a = user.id
  b = team.id
  user_id = n + a
  team_id = n + b
  
  TeamAdministrator.create!(user_id: user_id, team_id: team_id)

end
