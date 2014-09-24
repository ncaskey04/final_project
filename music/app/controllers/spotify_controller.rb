class SpotifyController < ApplicationController

    def get_info
      base_url = "https://api.spotify.com/v1/"
      cli_id = "76d14b1a3df14745a10d169fa1b3465f"
      cli_secret = "d1c9d99c869640a2aa9239fc7084ec80"

  
      url = base_url + "albums/0sNOF9WDwhWunNAHPD3Baj"
      params ||= {}
      params[:json] = true
      headers = {}
      access_token = current_user.token
      unless access_token.nil?
        headers["Authorization"] = "Bearer #{access_token}"
      end
      response = Typhoeus.get(url, headers: headers, params: params)
      # body = JSON.parse(response.body)
      ap response.body
      render json: response.body
    end

end
