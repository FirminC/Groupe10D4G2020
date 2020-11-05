class PageController < ApplicationController

    def index
        @scorescommunes = Scorecommune.page(params[:page]).per(500)
    end
end
