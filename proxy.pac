function FindProxyForURL(url,host)
{
	var proxy = "PROXY 10.208.123.253:8080";
	var domainList = ["*.inner.com","*.h3c.com","*.unisinsight.com","*.unicloud.com"];
	var ipList = ["10.*.*.*","172.*.*.*","192.168.*.*"];

	
	if (dnsDomainIs(host, "bis.*"))
		return "DIRECT";
	if (dnsDomainIs(host, "localhost"))
		return "DIRECT";
                if (dnsDomainIs(host, "cms-hpa.h3c.com"))
		return proxy;
                if (dnsDomainIs(host, "search.h3c.com"))
		return proxy;
                if (dnsDomainIs(host, "www.h3c.com"))
		return proxy;
                if (dnsDomainIs(host, "isp.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "access.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "autodiscover.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "crm.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "cs.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "csdata.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "es.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "gdp.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "learning.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "lyncdiscover.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "lyncdiscoverinternal.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "meet.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "sems.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "sip.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "ts.h3c.com"))
		return proxy;
               if (dnsDomainIs(host, "ordering.h3c.com"))
		return proxy;
	       if (dnsDomainIs(host, "bis.*"))
		return "DIRECT";
               if (dnsDomainIs(host, "eage.unicloud.com"))
		return proxy;
               if (dnsDomainIs(host, "lms.h3c.com"))
		return proxy;
          if (dnsDomainIs(host, "vc-recording.unicloud.com"))
		return proxy;
               if (dnsDomainIs(host, "cas.ems.h3c.com"))
		return proxy;
                if (dnsDomainIs(host, "navigate.h3c.com"))
		return proxy;
                if (dnsDomainIs(host, "2020navigate.ems.h3c.com"))
		return proxy;
     if (dnsDomainIs(host, "live-navigate.h3c.com"))
		return proxy;
                if (dnsDomainIs(host, "rma.h3c.com"))
		return proxy;
      if (dnsDomainIs(host, "zhiliao.h3c.com"))
		return proxy;
  if (dnsDomainIs(host, "cert.h3c.com"))
		return proxy;
  if (dnsDomainIs(host, "ipan.h3c.com"))
		return proxy;

	for ( var i=0 ; i < domainList.length ; ++i ) 
	{
		if (shExpMatch(host, domainList[i]))
			return "DIRECT";
	}
	
	for ( var i=0 ; i < ipList.length ; ++i ) 
	{
		if (shExpMatch(host, ipList[i]))
			return "DIRECT";
	}

	return proxy;
}
