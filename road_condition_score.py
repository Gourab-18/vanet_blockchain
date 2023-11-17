def road_condition_score(vel: list, d_abs: list, trust: int) -> list:
       t_score = 0   #traffic condition score, the higher the worse
       r_score = 0   #road condition score, the higher the worse
       t = 60         #threshold for traffic density in no of vehicles per km sq.
       report: list[tuple] = [] # [time_stamp, condition, score]

       for i in range(1,len(vel)):
              if (10 <= (vel[i]-vel[i-1]) <= 14):
                     if ((sum(d_abs[i],d_abs[i-1])/2) < t):
                            r_score = 5
                     else: 
                            t_score = 5
              else:
                     if vel[i-1] > 14:
                            if ((sum(d_abs[i],d_abs[i-1])/2) < t):
                                   r_score = 8
                            else: 
                                   t_score = 8
              r_score *= trust/80
              t_score *= trust/80

              if r_score!=0 and t_score==0:
                     report.append((i,"Bad Road",r_score))
              elif r_score ==0 and t_score != 0:
                     report.append((i,"Bad Traffic",t_score))
     
       if report: return report
       else: print("No bad condition detected!!")
