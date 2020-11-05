class PageController < ApplicationController

    def index
        @scorescommunes = Scorecommune.all;
    end
end
