def is_isomorphic(s, t)
    return false if s.length != t.length
    s_hash = {}
    t_hash = {}
    for i in 0..s.length-1
        if s_hash[s[i]]
            return false if s_hash[s[i]] != t[i]
        else
            s_hash[s[i]] = t[i]
        end
        if t_hash[t[i]]
            return false if t_hash[t[i]] != s[i]
        else
            t_hash[t[i]] = s[i]
        end
    end
    return true
end